import styled from 'styled-components';

export const CardStyle = styled.div`
    position: relative;
    border-radius: 1rem;
    background-size: cover;
    background-position: center;
    margin: 10px;
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.349);
    width: 15rem;
    height: 15rem;
    transform: ${(props: any) => (props.hover ? 'rotateY(180deg)' : 'rotateY(0deg)')};
    .card__container {
        position: relative;
        &-img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
    }
    .container__backcard {
        background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
        height: 100%;
        border-radius: 20px;
        background-size: cover;
        background-position: center;
        box-shadow: 0 20px 25px rgba(0, 0, 0, 0.349);
        position: relative;
        &-list {
            font-size: 15px;
            color: red;
            list-style: none;
            font-family: 'Courier New', Courier, monospace;
            font-weight: bold;
            text-align: center;
        }
        &-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            color: white;
            background-color: black;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            overflow: hidden;
            position: absolute;
            bottom: 0px;
            height: 13%;
        }
    }
`;
