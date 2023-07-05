/** @format */
"use client"
import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks"
import Icon from "@mdi/react"
import { mdiClose } from "@mdi/js"
import { closeModal } from "@/lib/redux/slices/globalSlice"
import ContactForm from "./ContactForm"

export default function Modal() {
  const dispatch = useAppDispatch()
  const {
    modal: { vis, type },
  } = useAppSelector(state => state.global)

  // Disable scroll when modal is visible
  useEffect(() => {
    if (vis) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup function to prevent side-effects
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [vis])

  const handleCloseModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal())
    }
  }

  const handleCloseButtonClick = () => {
    dispatch(closeModal())
  }

  const renderContenet = () => {
    switch (type) {
      case "contentForm":
        return <ContactForm />

      default:
        return null
    }
  }

  const renderTitle = () => {
    switch (type) {
      case "contentForm":
        return "Let's connect!"

      default:
        return null
    }
  }

  return (
    <div
      onClick={handleCloseModal}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        vis ? "visible opacity-100" : "collapse opacity-0"
      }`}
    >
      <div className="z-50  flex min-h-[500px] w-full max-w-[540px]  flex-col rounded-xl bg-gradient-border-light p-0.5 dark:bg-gradient-border-dark md:min-h-[600px] ">
        <div className=" flex grow flex-col rounded-xl   bg-gradient-card-body-light px-6 py-4 dark:bg-gradient-card-body-dark">
          <div className="flex  items-center justify-between">
            <h3 className="text-xl font-semibold">{renderTitle()}</h3>
            <button
              aria-label="close"
              onClick={handleCloseButtonClick}
              className=" hover:text-teal-200 active:text-teal-400"
            >
              <Icon path={mdiClose} size={1} />
            </button>
          </div>

          <hr className="my-4 h-0.5 border-none bg-slate-600 opacity-50" />

          {renderContenet()}
        </div>
      </div>
    </div>
  )
}
