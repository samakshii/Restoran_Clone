import React from 'react'
import RestoranArray from './RestoranArray'
export default function RestoranFood(props) {
  return (
    <div className='food'>
      <div className='food1'>
        <br/><h4 style={{color:'orange'}}>---Food Menu---</h4>
        <h1>Most Popular Items</h1><br/>
        <div className='food2' style={{marginLeft:'380px'}}>
                <span><i class="fa fa-coffee fa-2x" style={{fontSize:'40px',color:'orange'}}></i></span>
              </div>
              <div className='food3'>
                <span style={{color:'gray',fontSize:'12px'}}>Popular</span><br/>
                <h6 style={{color:'black',lineHeight:'10px',fontSize:'18px'}}>&nbsp;BreakFast</h6>
              </div><div className='food2'>
                <span>&nbsp;<i class="fa fa-hamburger fa-2x" style={{fontSize:'40px',color:'orange'}}></i></span>
              </div>
              <div className='food3'>
                <span style={{color:'gray',fontSize:'12px'}}>Special</span><br/>
                <h6 style={{color:'black',lineHeight:'10px',fontSize:'18px'}}>&nbsp;Lunch</h6>
              </div><div className='food2'>
                <span>&nbsp;<i class="fa fa-utensils fa-2x" style={{fontSize:'40px',color:'orange'}}></i></span>
              </div>
              <div className='food3'>
                <span style={{color:'gray',fontSize:'12px'}}>Lovely</span><br/>
                <h6 style={{color:'black',lineHeight:'10px',fontSize:'18px'}}>&nbsp;Dinner</h6>
              </div>
      </div><br/><br/><br/><br/>
      <div className='propflex'>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[0].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[0].b}</span>
              <span style={{marginLeft:'220px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[0].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[0].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[0].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Chicken Burger</h4>
        </div>
        <div className="modal-body">
          <p>{RestoranArray[0].c}</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[1].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[1].b}</span>
              <span style={{marginLeft:'250px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[1].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[1].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'275px',marginTop:'-20px',width:'170px',height:'35px'}}>{RestoranArray[1].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Chicken Chilli</h4>
        </div>
        <div className="modal-body">
          <p>Chicken Chilli</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[2].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[2].b}</span>
              <span style={{marginLeft:'260px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[2].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[2].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[2].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Pani Puri</h4>
        </div>
        <div className="modal-body">
          <p>Ipsum</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[3].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[3].b}</span>
              <span style={{marginLeft:'320px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[3].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[3].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[3].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Samosa</h4>
        </div>
        <div className="modal-body">
          <p>Ipsum ipsum clita erat amet dolor justo diam</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[4].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[4].b}</span>
              <span style={{marginLeft:'260px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[4].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[4].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[4].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Shev Puri</h4>
        </div>
        <div className="modal-body">
          <p>Ipsum ipsum clita erat amet dolor justo diam</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[5].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[5].b}</span>
              <span style={{marginLeft:'350px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[5].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[5].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[5].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Bhel</h4>
        </div>
        <div className="modal-body">
          <p>Ipsum ipsum clita erat amet dolor justo diam</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[6].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[6].b}</span>
              <span style={{marginLeft:'300px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[6].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[6].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[6].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Dosa</h4>
        </div>
        <div className="modal-body">
          <p>Ipsum ipsum clita erat amet dolor justo diam</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
        <div className='pf1'>
          <div className='pf2'>
            <img src={RestoranArray[7].a} alt='logo' height={100} width={100}></img>
          </div>
          <div className='pf3'>
            <div className='pf31'>
              <span style={{lineHeight:'50px',fontSize:'17px',fontWeight:'bold'}}>{RestoranArray[7].b}</span>
              <span style={{marginLeft:'350px',fontSize:'16px',fontWeight:'bold'}}>{RestoranArray[7].d}</span>
            </div>
            <div className='pf32'>
              <p>{RestoranArray[7].c}</p>
              <button class="btn btn-success" data-toggle="modal" data-target="#myModal" style={{marginLeft:'250px',marginTop:'-10px',width:'170px',height:'35px'}}>{RestoranArray[7].e}</button>
              <div class="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" style={{fontSize:'40px',marginTop:'-20px',marginLeft:'-10px'}}>&times;</button>
          <h4 style={{marginRight:'300px',fontWeight:'bold',fontFamily:'35px'}}>Fries</h4>
        </div>
        <div className="modal-body">
          <p>Hello</p>
        </div>
        <div className="modal-footer">
          <button type="button" data-dismiss="modal" >Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
