/** @format */
"use client"
import React, { useState } from "react"
import Icon from "@mdi/react"
import { mdiSend, mdiGamepadCircleOutline } from "@mdi/js"
import { useTransition } from "react"
import { ContactFormType, sendEmail } from "../actions"
import { toast } from "react-toastify"
import { useAppDispatch } from "@/lib/redux/hooks"
import { closeModal } from "@/lib/redux/slices/globalSlice"

type ErrorType = {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const dispatch = useAppDispatch()

  let [isPending, startTransition] = useTransition()
  const [emailStatus, setEmailStatus] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [errors, setErrors] = useState<ErrorType>({})

  const action = (event: React.FormEvent) => {
    event.preventDefault()

    setEmailStatus("")

    const handleSuccess = () => {
      toast.success("Email sent successfully!")
      dispatch(closeModal())
      setEmailStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    }

    const handleFailure = () => {
      toast.error("Couldn't send email!")

      setEmailStatus("failed")
    }

    const formData = { name, email, message }
    const newErrors = validateFields(formData)

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors)
    } else {
      startTransition(() => {
        sendEmail(formData)
          .then(() => handleSuccess())
          .catch(() => handleFailure())
      })
    }
  }

  const validateFields = (formData: ContactFormType) => {
    const { name, email, message } = formData

    const validateEmail = (email: string) => {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    }

    const newErrors: ErrorType = {
      name: "",
      email: "",
      message: "",
    }

    if (!name || name.length < 3 || name.length > 192) {
      newErrors.name = !name
        ? "Please fill out this field"
        : "Name must be between 3 and 192 characters long"
    }

    if (!email || email.length < 5 || email.length > 320 || !validateEmail(email)) {
      newErrors.email = !email
        ? "Please fill out this field"
        : "Please enter a valid email"
    }

    if (!message || message.length > 2000) {
      newErrors.message = !message
        ? "Please fill out this field"
        : "Message must be no more than 2000 characters long"
    }

    return newErrors
  }

  const removeError = (field: string) => {
    setErrors({ ...errors, [field]: "" })
  }

  return (
    <>
      <p className="mb-4 font-semibold textTertiary">Enter your information below</p>
      <form onSubmit={action} className=" flex h-max grow flex-col ">
        <label className="mb-1 font-semibold" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onFocus={() => removeError("name")}
          placeholder="John Doe"
          onChange={e => setName(e.target.value)}
          className="rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none "
        />
        {errors.name ? (
          <p className=" text-sm text-red-400">{errors.name}</p>
        ) : (
          <p className=" text-sm">&#160;</p>
        )}
        <label className="mb-1 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={email}
          onFocus={() => removeError("email")}
          placeholder="JDoe@gmail.com"
          onChange={e => setEmail(e.target.value)}
          className="rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none "
        />
        {errors.email ? (
          <p className=" text-sm text-red-400">{errors.email}</p>
        ) : (
          <p className=" text-sm">&#160;</p>
        )}
        <label className="mb-1 font-semibold" htmlFor="message">
          Message
        </label>

        <textarea
          name="message"
          value={message}
          onFocus={() => removeError("message")}
          placeholder="Hello, I'd like to reach out..."
          onChange={e => setMessage(e.target.value)}
          className="grow resize-none rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none"
        />
        {errors.message ? (
          <p className=" text-sm text-red-400">{errors.message}</p>
        ) : (
          <p className=" text-sm">&#160;</p>
        )}
        <button
          disabled={isPending}
          type="submit"
          className={`${
            isPending && "!opacity-80 "
          } my-4 flex w-full items-center justify-center gap-2 btnPrimary`}
        >
          <div> Send</div>
          <div>
            {!isPending ? (
              <Icon path={mdiSend} size={0.7} />
            ) : (
              <Icon path={mdiGamepadCircleOutline} size={0.7} spin />
            )}
          </div>
        </button>
      </form>
    </>
  )
}
