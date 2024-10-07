import { useEffect } from "react";

export default function Project(props){
    useEffect(() => { const script = document.createElement("script"); script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js"; document.body.appendChild(script); }, []);
    return(
        <div class="github-card" data-user={props.user} data-repo={props.repo}></div>
    );
}