import React from 'react'
import "./githubstats.css" 
import GitHubCalendar from "react-github-calendar"
const GitHubStats = () => {
    return (
        <div id='github-stats'>
            <div className='github-stats1'>
                <div>
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=AhamadShaikh&theme=windows-dark" alt="" id='github-streak-stats'/>
                </div>
                <div>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AhamadShaikh&theme=windows-dark" alt="" id="github-top-langs" width={"500px"} />
                </div>
                {/* <div style={{width:"0px"}}>
                    <img src="" alt="" id="github-top-langs" width={"0px"}/>
                </div> */}
            </div>
            <div id='git-calender'>
                <GitHubCalendar username="AhamadShaikh"/>
            </div>
        </div>
    )
}

export default GitHubStats