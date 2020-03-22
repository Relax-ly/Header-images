import React from 'react';
import { Wrapper, LinkDiv, Header } from './style/Style-Share-Modal-Content';

function ShareModalContent() {
  return (
    <Wrapper>
      <Header>Share</Header>
      <LinkDiv>Copy Link</LinkDiv>
      <LinkDiv>Email</LinkDiv>
      <LinkDiv>WhatsApp</LinkDiv>
      <LinkDiv>Messenger</LinkDiv>
      <LinkDiv>SMS</LinkDiv>
      <LinkDiv>Gmail</LinkDiv>
      <LinkDiv>Facebook</LinkDiv>
      <LinkDiv>Twitter</LinkDiv>
      <LinkDiv>Outlook</LinkDiv>
      <LinkDiv>Yahoo</LinkDiv>
      <LinkDiv>Embed</LinkDiv>
    </Wrapper>

  );
}

export default ShareModalContent;
