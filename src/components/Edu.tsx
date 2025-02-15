"use client"
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Edu() {
  const t = useTranslations("translation")
  return (
    <div className={`justify-center items-start mt-20 sm:mt-40 grid justify-items-center`} >
      <h1 className={`bg-red-400 px-3 py-2 mx-3 my-2 hover:px-5 sm:text-xl transition-all cursor-pointer bg dark:bg-red-500 dark:text-red-200 rounded-lg font-semibold`} > {t("edu")} </h1>
      <p className={`mt-10 transition-all duration-300 my-3 mx-7 font-semibold text-center text-md sm:text-lg lg:text-xl xl:text-2xl px-3 py-2 rounded-xl dark:text-white dark:bg-gray-600 bg-slate-200`} > {t("edup")} </p>
    </div>
  )
}
