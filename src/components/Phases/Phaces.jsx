import {
  PhaseItem,
  PhaseTitle,
  PhaseWrapper,
  PhasesContainer,
  PhasesList,
  StepItem,
  StepsList,
} from './Phases.styled';

export function Phases() {
  return (
    <PhasesContainer>
      <PhasesList>
        <PhaseItem>
          <PhaseWrapper>
            <PhaseTitle>Phase 1</PhaseTitle>
            <StepsList>
              <StepItem>Special events</StepItem>
              <StepItem>Launch social networks</StepItem>
              <StepItem>Launch token</StepItem>
              <StepItem>Launch token on DEX</StepItem>
            </StepsList>
          </PhaseWrapper>
        </PhaseItem>
        <PhaseItem>
          <PhaseWrapper>
            <PhaseTitle>Phase 2</PhaseTitle>
            <StepsList>
              <StepItem>Launch on token CEX</StepItem>
              <StepItem>Burn 1% PANDs</StepItem>
              <StepItem>Staking</StepItem>
            </StepsList>
          </PhaseWrapper>
        </PhaseItem>
        <PhaseItem>
          <PhaseWrapper>
            <PhaseTitle>Phase 3</PhaseTitle>
            <StepsList>
              <StepItem> Take over the meme-coin market</StepItem>
            </StepsList>
          </PhaseWrapper>
        </PhaseItem>
      </PhasesList>
    </PhasesContainer>
  );
}
