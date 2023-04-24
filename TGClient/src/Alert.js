import React from 'react'

function Alert(props){
return (
    props.alert &&
<div class="alert alert-success alert-dismissible fade show"style={{marginTop:"70px"}} role="alert">
    <strong>Success! </strong>Your NFT is uploaded successfully.
</div>

)
}

export default Alert