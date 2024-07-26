import './store.css'

const store = () => {
    return (
    <main>
        <div>
            <p>Find Us!</p>
            <p>Come visit us at our store or deliver to your house</p>
        </div>
            <div className="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15865.10315198276!2d106.8334673!3d-6.2273237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ee26e05b87%3A0x3aafa8f9ce65281b!2sAriobimo%20Sentral%20Building!5e0!3m2!1sid!2sid!4v1717429991157!5m2!1sid!2sid" 
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="box1">
                <h1>Block 71</h1>
                <p>Ariobimo Sentral, South Jakarta.<br/> 
                    RT.9/RW.4. East Kuningan,<br/> 
                    Setiabudi, Jakarta, 12950</p>
            </div>
            <div className="box2">
                <h1>Woodland Park Residence</h1>
                <p>Jl.Raya Kalibata No.22, RW.7,<br/> 
                    Rawajati, Kec. Pancoran, Kota<br/> 
                    Jakarta Selatan, Daerah Khusus<br/>
                    Ibukota Jakarta, 12750</p>
            </div>
            <div className="box3">
                <h1>IKEA Alam Sutera</h1>
                <p>Alam Sutera, Jl. Jalur Sutera<br/> 
                    Boulevard No.45, Kunciran, Kec.<br/> 
                    Pinang, Kota Tangerang,<br/>
                    Banten,15320</p>
            </div>
    </main>
    )
}

export default store