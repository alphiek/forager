import styled from 'styled-components';

export const BusinessItem = styled.div`
  font-size: 1rem;
  display: flex;
  flex-flow: flex-wrap;
  flex-direction: column;
  justify-content: flex-start;
  width: 12em;
  margin: 0 .5em 2.3em .5em;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #3F3F51;
  border-radius: 0.2em;
  padding-top:0.2em;
  padding-bottom: 0.2em;
  margin-bottom: 0.5em;
  box-shadow: 0 10px 24px -3px rgba(0, 0, 0, .3);
  `

export const NameContainer = styled.div`
  width: 80%;
  align-self: center;
`
export const PriceContainer = styled.div`
  width: 20%;
  align-self: center;
`
export const InfoWrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 width: 100%;
 justify-content: space-between;
`
export const ImageContainer = styled.div`
    overflow: hidden;
    background: #000;
    width: 58%;
    height: 6em;
    border-radius: 0.2em;
    box-shadow: 0 10px 24px -3px rgba(0, 0, 0, .3);
    `
export const RatingYelpWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 40%;
   height: 6em;
  `
export const RatingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   background-color: #FFF;
   height: 46%;
   border-radius: 0.2em;
   box-shadow: 0 10px 24px -3px rgba(0, 0, 0, .3);
`

export const ReviewContainer = styled.div`
   display: flex;
   margin-top: 0.4em;
   padding-top: 0.2em;
   padding-bottom: 0.2em;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 40%;
   background-color: #FFF;
   border-radius: 0.2em;
   box-shadow: 0 10px 24px -3px rgba(0, 0, 0, .3);
`

export const YelpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #D9FB9B;
  height: 46%;
  border-radius: 0.2em;
  box-shadow: 0 10px 24px -3px rgba(0, 0, 0, .3);
`
export const InfoContainer = styled.div`
  background-color: #FFF;
  border-radius: 0.2em;
  margin-top: 0.4em;
  padding: 0.4em;
  width: 100%;
  box-shadow: 0 10px 24px -3px rgba(0, 0, 0, .3);
`

export const Divider = styled.div`
  width: 95%;
  margin-left: 0.2em;
  margin-top: 0.8em;
  background-color: #D9FB9B;
  height: 0.2em;
  `
export const ReviewsWrapper = styled.div`
 display: flex;
 align-items: center;
`

export const CirclesContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  align-items: center;
`
export const Circles = styled.div`
  height: 1em;
  width: 1em;
  background-color: #fa9581;
  border-radius: 50%;
`
export const ReviewRead = styled.div`
  width: 20%;
  background-color: #3F3F51;
  height: 100%;
  align-self: flex-end;
`


export const Number = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 0.8em;
  margin: 0 0;
  color: #3F3F51;
`

export const Phone = styled.p`
  text-align: left;
  font-family: 'Oswald', sans-serif;
  font-size: 0.7em;
  color: #3F3F51;
  letter-spacing: 0.3em;
  padding-left: 0.2em
  margin-top: 1em;
  margin-bottom: 0.5em;
`

export const NumberWhite = styled.p`
  font-family: 'Oswald', sans-serif;
  line-height: 100%
  font-size: 0.8em;
  color: #fff;
  letter-spacing: 0.1em;
`

export const Subheading = styled.p`
  font-weight: 500;
  font-size: 0.6em;
  color: #3F3F51;
  margin: 0 0;
  text-transform: uppercase;
`
export const InfoText = styled.p`
 text-align: left;
 font-weight: 500;
 font-size: 0.7em;
 color: #3F3F51;
 margin: 0.2em 0;
 padding-left: 0.2em;
 line-height: 100%;
 text-transform: uppercase;
`
export const Thumbnail = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
