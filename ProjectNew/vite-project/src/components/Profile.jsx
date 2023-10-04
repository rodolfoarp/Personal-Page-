import React from 'react'

export function Profile() {
    return (
        <>
            <div className="container-fluid mx-auto px-4">
                <div className="row justify-content-center d-flex flex-row-reverse">
                    <div className="col-xs-5 col-sm-4 order-last">
                        <p>Hi ✋🏻 I'm Rodolfo Ramirez.  I'm an enthusiastic Junior
                            Developer with experience in Software Development 👨🏻‍💻📲</p>
                        <p>I am a person passionate about learning and personal growth 📚.
                            I love reading self-help and emotional intelligence books as they help me better understand my own thoughts
                            and emotions 🎭 . I also like to play Sudoku, as it is a game that requires concentration and strategy 🔢.
                            Also, I enjoy listening to music, as it helps me relax and disconnect from the world 🎶.</p>
                    </div>
                    <div className="col-xs-6 col-sm-5 order-first">
                        <img src="src/public/images/IMG_20230224_062055_126.jpg" className="img-fluid rounded mx-auto d-block" alt="University in the Morning" sizes='50vw' />
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}