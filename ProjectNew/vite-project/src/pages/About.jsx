import React from 'react'
import { Profile } from '../components/Profile.jsx'
import { ProfileCard } from '../components/ProfileCard.jsx'

export function About() {
    return (
        <>
            <Profile />
            <div className="container-fluid mx-auto px-3 md-px-5 xl-px-0">
                <div className="d-inline-flex p-2 sm-my-0">
                    <h1 className="text-uppercase fs-4 fw-lighter">Experience</h1>
                </div>
                <div className="container-fluid mx-auto w-100 p-3 h-100">
                    <div className="position-relative d-flex flex-wrap overflow-hidden h-100">
                        <ProfileCard Image="/src/public/images/atiempo.jpg" TitleCard="Atiempo" ContentCard="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat." RegionCard="timeline-2 left-2" YearJob="2021 - 2022" />
                    </div>
                </div>
            </div>
        </>
    )
}