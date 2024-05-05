/** @format */
"use client"

import Icon from "@mdi/react"
import { mdiSend, mdiGamepadCircleOutline } from "@mdi/js"
import { useTransition } from "react"
import { ContactFormType, sendEmail } from "../actions"
import { toast } from "react-toastify"
import { useAppDispatch } from "@/lib/redux/hooks"
import { closeModal } from "@/lib/redux/slices/globalSlice"
import { useForm } from "react-hook-form"

export default function ContactForm() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({ mode: "onBlur" })

  const [isPending, startTransition] = useTransition()

  const onSubmit = async (data: ContactFormType) => {
    startTransition(async () => {
      try {
        await sendEmail(data)
        toast.success("Email sent successfully!")
        dispatch(closeModal())
        reset()
      } catch (error) {
        toast.error("Couldn't send email!")
        dispatch(closeModal())
        reset()
      }
    })
  }

  return (
    <>
      <p className="textTertiary mb-4 font-semibold">Enter your information below</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-max grow flex-col">
        <label className="mb-1 font-semibold" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          {...register("name", {
            required: "Please fill out this field",
            minLength: {
              value: 3,
              message: "Name must be between 3 and 192 characters long",
            },
            maxLength: {
              value: 192,
              message: "Name must be between 3 and 192 characters long",
            },
          })}
          placeholder="John Doe"
          className="rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none"
        />
        {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
        <label className="mb-1 font-semibold" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          {...register("email", {
            required: "Please fill out this field",
            pattern: { value: /\S+@\S+\.\S+/, message: "Please enter a valid email" },
          })}
          placeholder="JDoe@gmail.com"
          className="rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none"
        />
        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        <label className="mb-1 font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          {...register("message", {
            required: "Please fill out this field",
            minLength: {
              value: 3,
              message: "Message must be at least 3 characters long",
            },
            maxLength: {
              value: 2000,
              message: "Message must be no more than 2000 characters long",
            },
          })}
          placeholder="Hello, I'd like to reach out..."
          className="grow resize-none rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none"
        />
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
        <button
          type="submit"
          className="btnPrimary my-4 flex w-full items-center justify-center gap-2"
        >
          <p>Send</p>

          <Icon
            path={isPending ? mdiGamepadCircleOutline : mdiSend}
            spin={isPending}
            size={0.7}
          />
        </button>
      </form>
    </>
  )
}
