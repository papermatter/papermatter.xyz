import React from "react"
import {useBreakpoint} from '../../hooks/useBreakpoints'

export default function QueriesTest() {
 const breakpoints = useBreakpoint()

 const matchingList = Object.keys(breakpoints).map(media => (
   <li key={media}>
     {media} ---- {breakpoints[media] ? "Yes" : "No"}
   </li>
 ))

 return <ol>{matchingList}</ol>
}
