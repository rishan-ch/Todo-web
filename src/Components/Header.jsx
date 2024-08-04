export default function Header({completed, total}){
    return(
        <section>
            <div>
                <p>Focus on your tasks</p>
            </div>
            <div>
                {completed} out of {total}
            </div>
        </section>
    );
}