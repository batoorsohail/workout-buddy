import { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts");
        console.log("resopnse", response)
        const json = await response.json()

        if (response.ok) {
          setWorkouts(json);
        }
      } catch(error) {
        console.log("error", error)
      }
    };

    fetchWorkouts()
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home;