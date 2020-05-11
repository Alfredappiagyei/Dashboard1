import React from 'react'
import './test/css/bootstrap.min.css';
import './App.css';

// import logo1 from './test/photos/Picture3.gif'
import logo2 from './test/photos/1.gif'
import logo3 from './test/photos/2.gif'
import logo4 from './test/photos/6.gif'
import logo5 from './test/photos/5.PNG'


import office from './test/photos/of6.jpg'
import office2 from './test/photos/of2.jpg'
import office3 from './test/photos/of4.jpg'
import office4 from './test/photos/of7.jpg'

import profile from './test/photos/logo.png'
import profile2 from './test/photos/postpic1.png'
import profile3 from './test/photos/postpic2.png'
import profile4 from './test/photos/postpic3.png'
import profile5 from './test/photos/postpic1 (1).png'
import profile6 from './test/photos/profile.png'
import profile7 from './test/photos/loginpic.png'




function App() {
  return (
    <div className="container-fluid" >
      <div className="row">

        <div className="col-md-2" style={{ backgroundColor: "lightgray", minHeight: "858px",justifyContent:"center" }}>
          <div className="moka">
            <img src={profile}  width='50px' height='50PX' style={{borderRadius:"50%",margin:"10px 0px 0px 0px"}}/>
            <h2>Moka</h2>
          </div>
          <div className="profile-side">
            <h4 style={{margin:"20px 0px"}}>Main</h4>
            <div className="side">
              <span><i class="fas fa-columns"></i></span>
              <h4>Dashboard</h4>
            </div>
            <div className="side" style={{backgroundColor:'#fff',borderRadius:"4px"}}>
              <span><i class="fa fa-user"></i></span>
              <h4>Profile</h4>
            </div>
            <div className="side">
              <span><i class="fa fa-users"></i></span>
              <h4>Team</h4>
            </div>
            <div className="side">
              <span><i class="fa fa-folder-open"></i></span>
              <h4>Document</h4>
            </div>
            <div className="side">
              <span><i class="fa fa-cog"></i></span>
              <h4>Settins</h4>
            </div>
          </div>
        </div>






        <div className="col-md-10" style={{ backgroundColor: "#ddd", minHeight: "550px", }}>
          <div className="container" style={{ width: "100%" }}>
            <div className="row" id="profile-main" style={{ backgroundColor: "#ddd", minHeight: "50px", }}>
            <span>  <img src={profile7} width='40px' height='40px' style={{borderRadius:"50%"}}/></span>
              <span><i class="fas fa-comment"></i></span>
              <span><i class="fas fa-bell"></i></span>
             
              <h1>Profile</h1>
              <p>Shot discreption here</p>
            </div>
          </div>






          <div className="container" style={{ width: "100%" }}>
            <div className='row'>
              <div className="col-md-3">

                <div className="row"   style={{ backgroundColor: "#fff" }}>
                  <div className="main">
                    <img src={profile6} width='80px' height='80px' style={{borderRadius:"50%"}}/>
                    <h4>Pikami Cha <p>Canada</p> </h4>
                  </div>

                  <div className="thumbs">
                    <a href="#" class="thumbnail">
                      <span><i class="fa fa-user"></i></span>
                      <h5><b>263</b></h5>
                      <p>Following</p>
                    </a>
                    <a href="#" class="thumbnail">
                      <span><i class="fa fa-user"></i></span>
                      <h5><b>263</b></h5>
                      <p>Following</p>
                    </a>
                  </div>
              
                <div className="btn">
                  <button style={{ padding: "5px 25px", borderRadius: "5px", margin:"10px 0px 35px 0px", border: "none", backgroundColor: "#ff0000" }}>Follow Now</button>
                </div>

                <div className="aboutme">
                  <h4><b>About Me</b></h4>
                  <p>
                    Hi i'm Pikamy has been the industry's dummy text ever since the 1500s
                  </p>
                </div>
                <div className="form">
                  <p><b>Mobile</b></p>
                  <p>0550130742</p>
                </div>
                <div className="form">
                  <p><b>Email</b></p>
                  <p>name@domain.com</p>
                </div>

                <div className="socials">
                {/* <a href="https://twitter.com/SoccerAngelAca1" > <img   src={logo1} alt="pizza"
                                class="img-responsive" width="40" height="40" /></a> */}
                           <a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/" >
                              <img   src={logo2} alt="pizza" class="img-responsive" width="30" height="30" /></a>
                         
                           <a href="#" > <img   src={logo4} alt="pizza"  class="img-responsive" width="30" height="30" /></a>
                           <a href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" > 
                              <img   src={logo3} alt="pizza" class="img-responsive" width="30" height="30" /></a>
                          <a href="#" > <img   src={logo5} alt="pizza"  class="img-responsive" width="30" height="30" /></a>
                </div>
                </div>







                <div className="row"  style={{margin:"30px 0px 32px 0px ", backgroundColor:"#fff"}}>
                  <p style={{margin:"40px 40px"}}><b>List</b></p>
                  <div className="g-row">
                    <b class="g">G</b>
                    <b  class="g">G</b>
                    <b  class="g">G</b>
                    <b  class="g">G</b>
                    <b  class="g">G</b>
                  </div>
                </div>
              </div>














              <div className="col-md-9" style={{ backgroundColor: "#ddd" }}>
                <div className="container" style={{ backgroundColor: "#fff" ,width:"100%",borderRadius:"3px", margin:"0px 0px 30px 0px"}}>
                  <div className="row">
                    <div className="inp">
                     <input type="text" placeholder="Post a new massage"></input>
                    </div>
                    <div className="send">
                    <span><i class="fas fa-user"></i></span>
                    <span><i class="fa fa-user"></i></span>
                    <span><i class="fas fa-camera"></i></span>
                    <span><i class="fas fa-smile-beam"></i></span>
                    <button className="btn-primary" style={{margin:"0px 40px" ,padding:"5px 20px",border:"none",borderRadius:"3px"}}>
                      Send
                    </button> 
                    </div>
                  </div>
                </div>





                <div className="container"  style={{ backgroundColor: "#fff" ,width:"100%",borderRadius:"3px"}}>
                  <div className="row" style={{margin:"20px 0px 0px 0px" }}>
                    <div className="col-md-2">
                     <img src={profile2} width='50px' height='50PX' style={{borderRadius:"50%"}} />
                    </div>
                    <div className="col-md-10" style={{border:"1px solid gray",borderRadius:"3px" }}>
                      <div className="t-head">
                      <span><i>Reply</i></span>                  
                      <span><i class="fa fa-thumbs-down"></i></span>  
                      <span><i class="fas fa-thumbs-up" style={{color:"red"}}></i></span> 
                      <p><b>Milan Gbah</b></p>                     
                      </div>
                      <div className="text">  
                      <p>Hi I'm Gbah , has been the industry's standard dummy text ever sice 1500s. 
                        When an unknow printer took a gallery of type
                      </p>              
                      </div>
                      <div className="images">
                        <img src={office} width="60px" height="60px" />
                        <img src={office2} width="60px" height="60px"/>
                        <img src={office3} width="60px" height="60px" />
                        <img src={office4} width="60px" height="60px"/>
                      </div>

                    </div>
                  </div>









                  <div className="row" style={{margin:"20px 0px 0px 110px" }}>
                  <div className="col-md-2">
                  <img src={profile3}  width='50px' height='50PX' style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="col-md-10"  style={{border:"1px solid gray",borderRadius:"3px" }}>
                      <div className="t-head">
                      <span><i>Reply</i></span>                  
                      <span><i class="fa fa-thumbs-down"></i></span>  
                      <span><i class="fas fa-thumbs-up" ></i></span> 
                      <p><b>Hebik</b></p>                     
                      </div>
                      <div className="text">  
                      <p>Hi I'm Hebik, has benn the industry's standard dummy.
                      </p>              
                      </div>
                    

                    </div>
                  </div>







                  <div className="row" style={{margin:"20px 0px 0px 0px", }}>
                  <div className="col-md-2">
                  <img src={profile4} width='50px' height='50PX' style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="col-md-10"  style={{border:"1px solid gray",borderRadius:"3px" }}>
                      <div className="t-head">
                      <span><i>Reply</i></span>                  
                      <span><i class="fa fa-thumbs-down"></i></span>  
                      <span><i class="fas fa-thumbs-up"  style={{color:"red"}}></i></span> 
                      <p><b>Noman Sika</b></p>                     
                      </div>
                      <div className="text">  
                      <p>Hi I'm sika
                      </p>              
                      </div>
                      

                    </div>
                  </div>


                  <div className="row" style={{margin:"20px 0px 108px 0px" }}>
                  <div className="col-md-2">
                    <img src={profile5}  width='50px' height='50PX' style={{borderRadius:"50%"}}/>
                    </div>
                    <div className="col-md-10"  style={{border:"1px solid gray",borderRadius:"3px" }}>
                      <div className="t-head">
                      <span><i>Reply</i></span>                  
                      <span><i class="fa fa-thumbs-down"></i></span>  
                      <span><i class="fas fa-thumbs-up"></i></span> 
                      <p><b>Milan Gbah</b></p>                     
                      </div>
                      <div className="text">  
                      <p>Hi I'm Gbah , has been the industry's standard dummy text ever sice 1500s. 
                        
                      </p>              
                      </div>
                    

                    </div>
                  </div>



                </div>


              </div>



            </div>
          </div>


        </div>




      </div>

    </div>
  );
}

export default App;
