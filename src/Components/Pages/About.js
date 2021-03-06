import React from 'react'
import aboutImg from "../../Assets/Images/about-photo.jpeg";

export const About = () => {

    return (
        <div className="aboutPage">
            <div className="aboutSection">
            <div className="aboutImg">
                <img src={aboutImg} alt="twighlight"/>
            </div>
            <div className="paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus fuga reiciendis maxime! Distinctio eveniet debitis incidunt nam provident nemo sunt dolor veritatis voluptas accusantium optio, saepe ea autem ipsum in voluptates, pariatur consequatur. Esse adipisci vitae inventore eum dolor corporis, amet odit commodi quaerat illum, animi deserunt aspernatur mollitia corrupti quia ducimus ipsa atque tempore eius non molestiae nam. </p>
                <br />
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus fuga reiciendis maxime! Distinctio eveniet debitis incidunt nam provident nemo sunt dolor veritatis voluptas accusantium optio, saepe ea autem ipsum in voluptates, pariatur consequatur. </p> */}
            </div>
            </div>
            <div className="published-title">Publications</div>
            <div className="publishedRow">
                <div className="luxe luxe1">
                <a href="https://luxesource.com/simplicity-defines-an-arizona-couples-next-chapter-in-life-laurel-pfannenstiel/#.YF-iiEjYqL4" target="_blank" rel="noreferrer" id="luxeLink">
                    <h4>Luxe Magazine</h4>
                    <img className="luxeThumbnail" src="https://luxesource.com/wp-content/uploads/2021/01/LX_Arizona54_HOM_Pfannenstiel_07-scaled.jpg" alt="luxe thumbnail"/>
                </a>
                </div>
                <div className="luxe luxe2 comingSoon">
                <a href="https://luxesource.com/simplicity-defines-an-arizona-couples-next-chapter-in-life-laurel-pfannenstiel/#.YF-iiEjYqL4" target="_blank" rel="noreferrer" id="luxeLink">
                    <h4>~ Coming Soon ~</h4>
                    <img className="luxeThumbnail" src="https://luxesource.com/wp-content/uploads/2021/01/LX_Arizona54_HOM_Pfannenstiel_07-scaled.jpg" alt="luxe thumbnail"/>
                </a>
                </div>
                <div className="luxe luxe3 comingSoon">
                <a href="https://luxesource.com/simplicity-defines-an-arizona-couples-next-chapter-in-life-laurel-pfannenstiel/#.YF-iiEjYqL4" target="_blank" rel="noreferrer" id="luxeLink">
                    <h4>~ Coming Soon ~</h4>
                    <img className="luxeThumbnail" src="https://luxesource.com/wp-content/uploads/2021/01/LX_Arizona54_HOM_Pfannenstiel_07-scaled.jpg" alt="luxe thumbnail"/>
                </a>
                </div>
                <div className="luxe luxe4 comingSoon">
                <a href="https://luxesource.com/simplicity-defines-an-arizona-couples-next-chapter-in-life-laurel-pfannenstiel/#.YF-iiEjYqL4" target="_blank" rel="noreferrer" id="luxeLink">
                    <h4>~ Coming Soon ~</h4>
                    <img className="luxeThumbnail" src="https://luxesource.com/wp-content/uploads/2021/01/LX_Arizona54_HOM_Pfannenstiel_07-scaled.jpg" alt="luxe thumbnail"/>
                </a>
                </div>
                <div className="luxe luxe5 comingSoon">
                <a href="https://luxesource.com/simplicity-defines-an-arizona-couples-next-chapter-in-life-laurel-pfannenstiel/#.YF-iiEjYqL4" target="_blank" rel="noreferrer" id="luxeLink">
                    <h4>~ Coming Soon ~</h4>
                    <img className="luxeThumbnail" src="https://luxesource.com/wp-content/uploads/2021/01/LX_Arizona54_HOM_Pfannenstiel_07-scaled.jpg" alt="luxe thumbnail"/>
                </a>
                </div>
                <div className="luxe luxe6 comingSoon">
                <a href="https://luxesource.com/simplicity-defines-an-arizona-couples-next-chapter-in-life-laurel-pfannenstiel/#.YF-iiEjYqL4" target="_blank" rel="noreferrer" id="luxeLink">
                    <h4>~ Coming Soon ~</h4>
                    <img className="luxeThumbnail" src="https://luxesource.com/wp-content/uploads/2021/01/LX_Arizona54_HOM_Pfannenstiel_07-scaled.jpg" alt="luxe thumbnail"/>
                </a>
                </div>
            </div>
            <div className="about-copyright">
            <div className="row">
                All images property of Eric Kruk | Copyright &copy;{new Date().getFullYear()} | All Rights Reserved
            </div>
            <div className="propertyof row">
                Use of any images without the photographer's explicit permission is strictly prohibited.
            </div>
        </div>
        </div>
    )
}

