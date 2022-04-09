import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
const StyledDiv = tw.div``;

type TextAdeProps = PropsWithChildren<{
}>;

/**
 * Show a text ad (EthicalAds)
 * @constructor
 */
const TextAd = (_props: TextAdeProps) => {
  return (
    <StyledDiv
      className=""
      data-ea-publisher="dsebastiennet" data-ea-type="text"
    >
    </StyledDiv>
  );
};

export default TextAd;
