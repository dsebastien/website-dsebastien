import React, { PropsWithChildren } from 'react';

type TextAdProps = PropsWithChildren<{
  keywords: string[];
}>;

/**
 * Show a text ad (EthicalAds)
 * @constructor
 */
const TextAd = (props: TextAdProps) => {
  return (
    <div
      className="mb-2"
      data-ea-publisher="dsebastiennet" data-ea-type="text" data-ea-keywords={props.keywords.join('|')}
    >
    </div>
  );
};

export default TextAd;
