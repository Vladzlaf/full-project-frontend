
export interface PageErrorProps {
  className?: string
}

export const ErrorPage = ({ className }: PageErrorProps) => {

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={className}>
        <p>{('Something went wrong...')}</p>
        <button onClick={reloadPage}>{('reload page')}</button>
    </div>
  )
}