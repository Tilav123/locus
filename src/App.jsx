import { useState } from 'react'
import './App.css'
import './index.css'
import './media.css'

function App() {
  function Header() {
    return (
      <>
        <header className='head'>
          <a href="#">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="53" viewBox="0 0 45 53" fill="none">
              <path d="M4 28V49H25" stroke="#58A9A5" stroke-width="8" stroke-linecap="round"></path>
              <path d="M41 28V49H20" stroke="#58A9A5" stroke-width="8" stroke-linecap="round"></path>
              <path d="M41 28L28.8588 15.4666L17 4" stroke="#58A9A5" stroke-width="8" stroke-linecap="round"></path>
              <path d="M4 28L16.1412 15.4666L28 4" stroke="#58A9A5" stroke-width="8" stroke-linecap="round"></path>
            </svg>
            <p className="title">Locus</p>
          </div>
          </a>
          <div className="links_box">
            <a href="#" className="link active_link">Home</a>
            <a href="#" className="link">Contact</a>
            <a href="#" className="link">Location</a>
            <a href="#" className="link">About Us</a>
          </div>
          <button className="green_btn" title="Sorry, we don't work now">Sign Up</button>
        </header>
      </>
    )
  }
  function MainBlock() {
    return (
      <>
        <div className='main_block'>
          <div className='left_one'>
            <h1 className='head_text' data-aos="fade-up">Get the inspiration of interior design here</h1>
            <p className='subhead_text' data-aos="fade-up">architecture not only about engineering, it even lands to art and aesthetics. With us, you will get a residentical design with an extraordinary touch of art.</p>
            <button class="green_btn corner" title="Sorry, we don't work now">Let’s go</button>
          </div>
          <div className='right_one'>
            <div className='image_of_right_one'></div>
          </div>
        </div>
      </>
    )
  }
  function WorkingBlock() {
    return (
      <>
        <div className='working_block'>
          <center><h1 className='head_text'>How it works</h1></center>
          <center><p className='subhead_text subtitle_howitworks'>Spice up your space even simpler than you think</p></center>
          <div className='video_block'>
            <div className="video">
              <button className="play"></button>
            </div>
            <div className="description_of_video">
              <p className='description_v'>We provide design and build for commercial building, interior and furniture to improve the better life.</p>
              <p className='description_v downdescription_v'>s e e  v i d e o</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  function MissionBlock() {
    return (
      <>
        <div className='mission_block'>
          <div className="mission_image"></div>
          <div className="mission_box">
            <h1 className='mission_head_text'>Our mission is to deliver aesthetic visual for your home</h1>
            <p className='mission_subhead_text'>By applying bacis psychology principles, we are going to explain how perception works and how we can use this understanding to maximise the space that we occupy in our homes.</p>
          </div>
        </div>
      </>
    )
  }
  function Lines() {
    return (
      <>
        <div class="lines">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </>
    )
  }
  function ProjectBlock() {
    function PartBlock() {
      let [arr, setArr] = useState([
        {
          headtitle: "Project Livingroom",
          subtitle: "A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.",
          image: "../public/first_one.png",
          transformation1: "",
          transformation2: ""
        },
        {
          headtitle: "Project workspace",
          subtitle: "A simple guide to create the perfect livingro- om for . Night Watc works beautifully in a wi- de gamut of arrangements.",
          image: "../public/second_one.png",
          transformation1: "noRadius",
          transformation2: "turn"
        },
        {
          headtitle: "Library",
          subtitle: "A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.",
          image: "../public/third_one.png",
          transformation1: "",
          transformation2: ""
        }
      ])
      return (
        <>
          {arr.map((one, index) => (
            <div className={'part_block ' + one.transformation2}>
              <div className="text_part_block">
                <h1 className='green_text'>{one.headtitle}</h1>
                <p className="simple_text">{one.subtitle}</p>
              </div>
              <img src={one.image} className={"image_of_pb " + one.transformation1}></img>
            </div>
          ))}
        </>
      )
    }
    return (
      <>
        <div className="project_block">
          <center><h1 className='head_text'>Our project</h1></center>
          <center><p className='subhead_text subhead_of_project'>Introducing our first official project</p></center>
          <center><Lines></Lines></center>
          <div className="project_content">
            <PartBlock></PartBlock>
          </div>
        </div>
      </>
    )
  }
  function Testimonial() {
    let [images, setImages] = useState(["../public/first_img.png", "../public/second_img.png", "../public/third_img.png", "../public/fourth_img.png"])
    return (
      <>
        <div className="testimonial">
          <center><h1 className='head_text'>Testimonial</h1></center>
          <div className="test_blocks">
            {images.map((one, index) => (
              <div className="item">
                <img src={one} alt="" className='image_test' />
              </div>
            ))}
          </div>
          <div className="testimonial_main_block">
            <div className="nigga"></div>
            <div className="green_block_test">
              <div class="number_block">
                <div class="number_cild">
                  <h2 class="num">
                    <span>105</span>
                    <p class="comment">project done</p>
                  </h2>
                </div>
                <div class="number_cild">
                  <h2 class="num">
                    <span>12</span>
                    <p class="comment">year of experience</p>
                  </h2>
                </div>
                <div class="number_cild">
                  <h2 class="num">
                    <span>10</span>
                    <p class="comment">big company partnership</p>
                  </h2>
                </div>
              </div>
              <p className="thecomment">
              <img src="../public/quotes.png" className='quotes' />
                "Not able to tell you how happy I am with interior design.
                Interior design has completely surpassed our expectations.
                Interior design saved my business. Interior design is worth
                much more than I paid."
                <br /><br />
                <span className='special_color'> - Roscoe</span>
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
  function ContactBlock() {
    return (
      <>
        <div className="contact_block">
          <div className="right_contact">
            <h1 className='head_text'>Contact Us</h1>
            <p className='subhead_text subhead_contact_text'>Have any questions? Want help
              before getting started?</p>
            <Lines></Lines>
          </div>
          <form className="left_contact" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="7b6ec534-50df-4042-aeaf-6d2f7ccfe70f"></input>
            <input type="text" name="name" className='input_contact bottom_border' placeholder='Full name' required/>
            <input type="email" name="email" className='input_contact bottom_border' placeholder='Email address' required/>
            <input type="text" name="message" className='input_contact' placeholder='Description'/>
            <button class="green_btn corner" type='submit'>Send now</button>
          </form>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='container'>
        <Header></Header>
        <MainBlock></MainBlock>
        <WorkingBlock></WorkingBlock>
        <MissionBlock></MissionBlock>
        <ProjectBlock></ProjectBlock>
        <Testimonial></Testimonial>
        <ContactBlock></ContactBlock>
      </div>
    </>
  )
}
export default App
