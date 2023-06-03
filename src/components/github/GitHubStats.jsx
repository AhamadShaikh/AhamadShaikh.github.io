import React from 'react'
import "./githubstats.css" 
import GitHubCalendar from "react-github-calendar"
const GitHubStats = () => {
    return (
        <div id='github-stats'>
            <div className='github-stats1'>
                <div id='github-streak-stats'>
                    <img id="github-top-langs" src="https://github-readme-streak-stats.herokuapp.com/?user=AhamadShaikh&theme=windows-dark" alt="" />
                </div>
                <div id="github-top-langs">
                    <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AhamadShaikh&theme=windows-dark" alt="" />
                </div>
            </div>
            <div id="github-stats-card">
                <GitHubCalendar id="github-top-langs"  username="AhamadShaikh"/>
            </div>
        </div>
    )
}

export default GitHubStats