import Button from './Button.jsx'

function ApplyButton({ onApply }) {
  return (
    <Button className="button-primary apply-button" onClick={onApply}>
      Apply now
    </Button>
  )
}

export default ApplyButton
