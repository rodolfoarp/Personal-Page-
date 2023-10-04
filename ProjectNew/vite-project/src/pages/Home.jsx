import React from 'react'

export function Home() {
    return (
        <>
            <main className="container">
                <figure className="container-image">
                    <img src='/src/public/images/IMG_20220909_142018_91.jpg' className="img-circle" alt="Perfil" />
                </figure>

                <div className="container-information">
                    <p className="container-content container1">Hi ✋🏻 I'm Rodolfo Ramirez. <br /> I'm an enthusiastic Junior
                        Developer with experience in Software Development 👨🏻‍💻📲</p>
                    <p className="container-content container2">Actually, I'm working in a Insurance Company.</p>
                    <p className="container-content container3">I really enjoy working with Javascript, NodeJS, ⚛ React, Express, PHP. 💻📲
                    </p>
                    <p className="container-content container4">If you want to connect with me, in the footer are my social networks
                        or you can text/email me directly at:</p>

                    {/* Email  */}
                    <section className="container-content social-networks">
                        <a href="mailto:ramirezrodolfo333@gmail.com?subject=Hello%20Rodolfo&body=Hello%20Rodolfo"
                            rel="noreferrer noopener" target="_blank"><i className="fa fa-envelope fa-lg"
                                aria-hidden="true"></i>&nbsp; ramirezrodolfo333@gmail.com</a>
                    </section>
                    {/* Address */}
                    <section className="container-content social-networks">
                        <p><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>&nbsp; Caracas, Venezuela 🇻🇪</p>
                    </section>

                    <p className="container-content container7">Thanks for visiting my landing page</p>
                </div>
            </main>
            <hr />
        </>
    )
}