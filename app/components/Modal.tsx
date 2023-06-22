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
    vis && (
      <>
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="z-50  rounded-xl bg-gradient-border p-0.5">
            <div className="min-h-[500px] min-w-[400px] rounded-xl bg-gradient-main p-4">
              <div className="flex  items-center justify-between">
                <h4 className="text-xl font-semibold">{renderTitle()}</h4>
                <button
                  onClick={handleCloseButtonClick}
                  className="duration-300 hover:text-teal-200 active:text-teal-400"
                >
                  <Icon path={mdiClose} size={1} />
                </button>
              </div>

              <hr className="my-4 h-0.5 border-none bg-slate-600 opacity-50" />

              <div className="">{renderContenet()}</div>
            </div>
          </div>
        </div>
      </>
    )
  )
}
