import React, {} from 'react';
import styled from 'styled-components/macro';
import Clone from './Clone';
import DonutChartData from './DonutChartData';

const StyledTitle = styled.p`
    border-bottom: 0.2em dotted grey;
`;

const StyledCard = styled.div`
    margin: 0.8em;
    padding: 0.75em;
    display: inline-flex;
    box-shadow: 0.125em 0.125em 0.1875em 0.1875em #979595;
    flex-direction: column;
    width: 40%;
`;

const StyledCardHeader = styled.span`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0.5em;
    padding-top: 0.2em;
`;

const DonutChartCard = ( { profile, clickClone, index } ) => {
    let series = profile.data.map(i => i.value);
    let labels = profile.data.map(i => i.label);


    return (
        <StyledCard>
            <StyledCardHeader>
                <StyledTitle>{profile.title}</StyledTitle>
                    <div>
                        <Clone clickClone={clickClone} index={index}/>
                    </div>
            </StyledCardHeader>
            <DonutChartData totalLabel={profile.totalLabel} series={series} labels={labels} />
        </StyledCard>
    );
}

export default DonutChartCard;