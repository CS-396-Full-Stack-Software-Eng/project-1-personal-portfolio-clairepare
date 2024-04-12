

export default function Toggle({toggled, choice1, choice2, handleToggle}) {
    return (
        <div className="toggle-container" onClick={handleToggle}>
            <div className={`toggle-btn ${!toggled ? "disable" : ""}`}>
                {toggled ? choice1 : choice2}
            </div>
        </div>
    )

}