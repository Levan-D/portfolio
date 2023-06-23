/** @format */

"use client"
import { useAppDispatch } from "@/lib/redux/hooks"
import Icon from "@mdi/react"
import { mdiEmailFastOutline } from "@mdi/js"
import { openModal } from "@/lib/redux/slices/globalSlice"

type Props = {
  type?: "icon"
}

export default function ContactBtn({ type }: Props) {
  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    dispatch(openModal({ vis: true, type: "contentForm" }))
  }
  return (
    <button
      className={`  flex gap-4 rounded-full border-2  border-teal-400 px-4 py-2 duration-300 hover:text-teal-200 active:text-teal-400 `}
      onClick={handleOpenModal}
    >
      <div className={`${type === "icon" && "hidden lg:block"}`}>Get in touch</div>
      <div>
        <Icon path={mdiEmailFastOutline} size={1} />
      </div>
    </button>
  )
}
