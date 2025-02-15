"use client"
import { useTranslations } from 'next-intl'
import React from 'react'

const WorkingWith = () => {
	const t = useTranslations("translation")
	return (
		<div className={`grid justify-items-center justify-center items-center mt-10`} >
			<h1 className={`bg-green-400 px-3 py-2 mx-3 mb-12 hover:px-5 sm:text-xl transition-all cursor-pointer dark:bg-green-500 dark:text-green-800 rounded-lg font-semibold`} > {t("workingWith")} </h1>
			<a href="https://faya.dev"><img className={`w-72 mr-5 md:mr-0 lg:w-96`} src={`/images/logo-2.png`} alt="" /></a>
		</div>
	)
}

export default WorkingWith
