import React from 'react'

function CovidSection() {

    let totalCasos = 0

    async function getCases(){
        const API_URL = "https://api.api-ninjas.com/v1/covid19?country=chile"
        const respose = await fetch(API_URL,{
            method: "GET",
            headers: {
                ""
            }
        })
    }
    


    return (
    <div>covidSection</div>
  )
}

export default CovidSection