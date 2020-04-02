import React from 'react';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';


// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    
    margin: 346px,
    marginLeft: 488px,

  `;
const spinnerCss = css`
  margin: 346px,
  marginLeft: 488px,
  `;


export default class LoadingAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {

        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh"
            }}
            >
                <BeatLoader
                    css={override}
                    sizeUnit={"rem"}
                    size={2}
                    color={"#42A5F5"}
                    loading={this.state.loading}
                    margin={'10px'}
                />
            </div>
        );
    }
}