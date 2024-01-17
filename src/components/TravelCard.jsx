'use client';
import {Card} from 'flowbite-react';
import PropTypes from "prop-types";
import locationIcon from '../assets/location-2955.svg';

export function TravelCard(travel) {
    return (
        <Card className="max-w-sm mx-auto mb-5" imgSrc={travel.imageUrl} horizontal>
            <div className={"flex flex-col"}>
                <header className={"flex flex-col mb-5"}>
                    <h2 className={"flex flex-row items-center space-x-2"}>
                        <i className={"me-1"}><img src={locationIcon} width={15} alt=""/></i>{travel.location.name}
                        <a  className={"hover:underline flex items-end text-xs"} href={travel.location.googleMapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on google map
                        </a>
                    </h2>

                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {travel.title}
                    </h5>
                </header>
                <div className={"flex flex-col"}>
                    <time className={"dark:text-gray-500 text-gray-600"}>{travel.date.start} - {travel.date.end}</time>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {travel.description}
                    </p>
                </div>
            </div>
        </Card>
    )
}


TravelCard.propTypes = {
    travel: PropTypes.object
}
