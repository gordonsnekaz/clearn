import React from 'react';

class Navtop extends React.Component {
  state = {
    accountDropDown: true
  }
  divStyle = (val) =>{
    if(val === true){
      return {
        display: 'block'
      }
    }else{
      return{
        display: 'none',
      }
    }
  }
  getState = () => {
      this.setState({ accountDropDown: true})
  }

  render() {
      return (
        <div className='flex'>
          <div className='w-1/5'>
            <p className='text-blue-900 font-medium text-xl'>CLearn</p>
          </div>
          <div className='flex w-4/5'>
            <div className='flex absolute right-0 pr-8'>
              <div className=''>
                <input type="text" placeholder='search' className='bg-gray-200 border border-gray-500 rounded-full px-8 focus:bg-white hover:bg-gray-100 text-lg font-medium'></input>
              </div>
              <div className='px-8'>
                <p className='font-semibold hover:text-gray-900' onClick={ this.getState }>Account</p>
                <ul style={ this.divStyle( this.accountDropDown )}>
                  <li>Profile</li>
                  <li>Log out</li>
                </ul>
              </div>
              <div className=''>
                <p className='font-semibold hover:text-gray-900'>Notifications</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Navtop;
