import React from "react";

export function ProfileCard({ Image, TitleCard, ContentCard, RegionCard, YearJob }) {
    return (
        <>
            <section style={{ backgroundColor: "#F0F2F5" }} >
                <div className="container py-5">
                    <div className="main-timeline-2">
                        <div className={RegionCard}>
                            <div className="card">
                                <img src={Image} className="card-img-top"
                                    alt="Responsive image" />
                                <div className="card-body p-4">
                                    <h4 className="fw-bold mb-4">{TitleCard}</h4>
                                    <p className="text-muted mb-4"><i className="far fa-clock" aria-hidden="true"></i>{YearJob}</p>
                                    <p className="mb-0">{ContentCard}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}