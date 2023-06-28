/** @format */
"use client"
import React, { useState } from "react"
import Icon from "@mdi/react"
import { mdiSend, mdiGamepadCircleOutline } from "@mdi/js"
import { useTransition } from "react"
import { ContactFormType, sendEmail } from "../actions"
import { toast } from "react-toastify"

type ErrorType = {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  let [isPending, startTransition] = useTransition()
  const [emailStatus, setEmailStatus] = useState("")
  console.log(emailStatus)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [errors, setErrors] = useState<ErrorType>({})

  const action = (event: React.FormEvent) => {
    event.preventDefault()

    setEmailStatus("")

    const handleSuccess = () => {
      toast.success("Email sent successfully!")
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
      <p className="mb-4 font-semibold text-slate-300">Enter your information below</p>
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
          type="submit"
          className="my-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 font-semibold text-slate-950 duration-300 [background:linear-gradient(135deg,_rgba(94,_234,_212,_1)_20%,rgba(45,_212,_191,_1)_80%)] hover:bg-teal-300 active:bg-teal-500"
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
