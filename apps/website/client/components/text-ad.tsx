import React, { PropsWithChildren } from 'react';
import tw from 'twin.macro';
const StyledDiv = tw.div``;

type TextAdProps = PropsWithChildren<{
  keywords: string[];
}>;

/**
 * Show a text ad (EthicalAds)
 * @constructor
 */
const TextAd = (props: TextAdProps) => {
  return (
    <StyledDiv
      className="mb-2"
      data-ea-publisher="dsebastiennet" data-ea-type="text" data-ea-keywords={props.keywords.join('|')}
    >
    </StyledDiv>
  );
};

export default TextAd;
