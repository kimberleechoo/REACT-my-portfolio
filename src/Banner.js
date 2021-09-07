import landingpgbg1 from './images/landingpgbg1.png'
const bannerHome = () => {
    return ( 
        <div className="banner"  style={{ backgroundImage: "url(" + landingpgbg1 +")" }}>
            {/* bannerimghere: */}
            {/* <img src={landingpgbg1} /> */}
        </div>
     );
}
 
export default bannerHome;