"use client"
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'

export default function Projects() {
  const t = useTranslations("translation")
  const { theme } = useTheme()
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => {
    setHydrated(true)
  }, [])
  if (!hydrated) return null

  return (
    <div className={`justify-center items-start my-14 grid justify-items-center`} >
      <h1 className={`bg-yellow-400 px-3 py-2 mx-3 mb-12 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-yellow-500 dark:text-yellow-800 rounded-lg font-semibold`} > {t("projects")} </h1>
      <div className={`md:flex grid items-center transition-all duration-300 justify-items-center gap-y-5`} >
        <a className={`mx-5`} href="https://alshaheera.com" target='_blank' rel='noreferrer noopener'>
          <Image width={200} height={300} className={`w-44 sm:w-52 my-5 lg:w-48 dark:invert lg:mr-10`} src={`/images/shaheera.svg`} alt="" />
        </a>
        <a className={`mx-5`} href="https://1myh.github.io/elrayan" target='_blank' rel='noreferrer noopener'>
          <Image width={200} height={300} className={`w-44 sm:w-52 my-5 lg:w-72`} src={theme === "dark" ? `/images/elrayanLogo.svg` : `/images/elrayanBlue.svg`} alt="" />
        </a>
        <a className={`mx-5`} href="https://emenu.faya.dev" target='_blank' rel='noreferrer noopener'>
          <Image width={200} height={300} className={`w-36 sm:w-44 md:ml-0 lg:w-40 max-h-32 lg:max-h-28 object-cover filter saturate-150`} src={`/images/fayaMenu2.png`} alt="" />
        </a>
        <a className={`mx-5`} href="https://royalcomfurt.com" target='_blank' rel='noreferrer noopener'>
          <Image width={200} height={300} className={`w-60 sm:w-80 my-5 invert dark:invert-0 lg:w-80 lg:mr-10`} src={`/images/royalcomfort.svg`} alt="" />
        </a>
      </div>
    </div>
  )
}