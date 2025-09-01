import React from 'react'

export default function Heading({ title, role }) {
    return (
        <>
            {

                <div className="flex items-center" >
                    <h2 className="flex items-center lg:block text-[#1E1E1E] font-semibold text-[26px]">
                        {title || "Dashboard"}
                    </h2>
                </div>
            }
        </>

    )
}
