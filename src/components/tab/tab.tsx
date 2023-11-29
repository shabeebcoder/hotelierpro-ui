import classNames from 'classnames';
import React from 'react'

const tabItems = [{

}]

interface Tab {
    label: string;
    Icon: any
    onClick: () => void,
    active?: boolean

}
interface TabProps {
    items: Tab[]
}

function Tab({ items }: TabProps) {
    return (<>
        <div>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex cursor-pointer flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {
                        items.map(({ Icon, ...row }: Tab) => {
                            return (
                                <li className="me-2">
                                    <a onClick={row.onClick} className={classNames("inline-flex  items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg   dark:hover:text-gray-300 group", {
                                        "text-blue-600": row.active == true,
                                        "border-blue-600": row.active === true,
                                        "active": row.active === true,
                                        "hover:text-gray-600": row.active !==true,
                                        "hover:border-gray-300": row.active !==true,
                                    })}>
                                        <Icon />

                                        {row.label}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        <div>

        </div>
    </>)
}

export default Tab