import React, { useEffect, useState } from "react";
import DonutChartCard from './DonutChartCard';
import styled from "styled-components/macro";
import getData from "../apiRequests/middleware"

const StyledHeader = styled.h1`
    border-bottom: 0.1em solid #08396b;
    margin: 0 12em 1em 12em;
    text-align: center;
`;

const StyledPage = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #08396b;
  margin-top: 4em;
  align-self: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainScreen = () => {
    let [profiles, setProfiles] = useState([])

    useEffect(() => {
        getData()
        .then((response) => {
            setProfiles(response.profiles)
        })
        .catch((err) => { console.log(err) })
    }, [])

    const clickClone = (index) => {
        setProfiles([...profiles, profiles[index]])
    }

    return (
        <StyledPage>
            <StyledHeader>
                Ich bin ein Berliner
            </StyledHeader>

        { profiles.map((profile, index) => {
            return <DonutChartCard profile={profile} key={index} index={index} clickClone={clickClone} />
        })}
        </StyledPage>
    );
};

export default MainScreen;