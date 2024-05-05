/** @format */

"use client"
import { useAppDispatch } from "@/lib/redux/hooks"
import Icon from "@mdi/react"
import { mdiEmailFastOutline } from "@mdi/js"
import { openModal } from "@/lib/redux/slices/globalSlice"

type Props = {
  icon?: boolean
}

export default function ContactBtn({ icon }: Props) {
  const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    dispatch(openModal({ vis: true, type: "contentForm" }))
  }
  return (
    <button
      aria-label="contact button"
      className={`flickerBox btnSecondary z-50 flex gap-4 dark:bg-slate-900`}
      onClick={handleOpenModal}
    >
      {!icon && <p>Get in touch</p>}

      <Icon path={mdiEmailFastOutline} size={1} />
    </button>
  )
}
