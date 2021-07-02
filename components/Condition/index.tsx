import * as React from 'react'

interface ICondition {
  when?: boolean
  children: any
}

const Condition: React.FC<ICondition> = ({ when, children }) => {
	if (when) return children
	return null
}

export default Condition
