import Styled from 'styled-components'

export const Main = Styled.div`
.card {
    width:100%;
    max-width:350px;
    margin-bottom:12px;
}

.top {
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width: 100%;
}
a {
text-decoration:none;
width:350px;
}
img {
    width: 100%;
    height:180px;
    object-fit:cover;
    border-radius:15px;
}
.label {
    color:#000;
    margin:0;
    font-size:22px;
    margin-left:10px
}
`;