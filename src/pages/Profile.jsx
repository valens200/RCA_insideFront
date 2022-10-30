import React from "react";
import HomeNav from "../components/HomeNav";
import Home from "./Home";
import LogoutOptions from "../components/LogoutOptions";
import SinglePost from "../components/SinglePost";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import FollowersFollowings from "../components/FollowersFollowings";
function Profile() {
  const dispatch = useDispatch();
  const navigations = useSelector((store) => store.post.navigations);
  const loggedInUser = useSelector((store) => store.post.loggedInUser);
  return (
    <div>
      <HomeNav />
      <div className="h-[92vh] flex items-center">
        <div className="flex  w-[90%] h-[90%] mx-auto">
          <div className="w-[30%]  h-[50%]">
            <SinglePost />
          </div>
          <div className="w-[50%] flex flex-col space-y-4 border-b-0 h-[100%] border">
            <div className="w-[100%] h-[40%]">
              <img
                className="w-[100%] h-[70%] z-100"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8/ODMtNygtOisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBKwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAgEDB//EACIQAQEAAQQDAQADAQAAAAAAAAABAhESMVEDIUFhE3GhIv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE74ChO+dm+dgoTvnZvnYKAAAAAAAAAAAAAAAAAAAAAAAAAAAAABlujN8T5MpYm2ev8AQX5L607bMZ0me8tfkdAZtnUNs6ib5IfyfgK2zqMuM6ZPJFgjx350tzvrLX5Vb4ChO+KAAAAAAAAAAAAAAAAAAAAAAAAAR5Pk7WjycwFbZ0bZ1GgJukiZLlzwX3fyKzy0/sD1DfGTDtW2dQGeqmy4+5w24dNwy1/sCaVmVk+as4v5SXS3UG46X4eP7OmY+8tZw3DmgsAAAAAAAAAAAAAAAAAAAAAAABz8nMdHPycwHRlay8AnxT0zH3lb03xcMw5sB0AAc8vWUvbo558yA3y8K5T5eFTiA1GHNWjDmgsAAAAAAAAAAAGNAAAAAAAAAAABzz5jo5+TmA6AA54+rp23OfY3PHVmOfy8g3HKVScsJU7L2CsspGYT7WzCRmWfycgzL3dOuXROGOigEYc1bnhzkDoAAAAAAAAAAAAAAAAAAAAAAAA5+T46Ms1Bo5/x/psvdB0ZcZUbL3TZe6Bss4rf+mbL2bL3QNlvNXjjIjZe6bL3QdBz2Xumy90HRz8fNNn6uTQGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
              />
              <div className="w-[25%] ml-2 -translate-y-[10vh] border rounded-full z-20 h-[20vh] ">
                <img
                  className="rounded-full w-[100%] h-[100%]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
                />
              </div>
            </div>
            <div className="w-[95%] border-b pb-4 mx-auto">
              <div className="flex flex-row space-x-2">
                <p className="font-bold">{loggedInUser.fullName}</p>
                <span>{"@" + loggedInUser.userName}</span>
              </div>
              <div className="flex space-x-3  font-bold">
                <p>{loggedInUser.followers.length + " Followers"}</p>
                <p> 23 Following</p>
                <p>{loggedInUser.posts.length + " Posts"}</p>
              </div>
            </div>

            <div className="border   w-[95%] border-b-0 mx-auto h-[57%]">
              <div className="w-[70%] flex justify-center  space-x-2 mx-auto">
                {navigations.map((nav, index) => (
                  <Button
                    className=" w-[25%] border"
                    key={index}
                    variant="text"
                  >
                    {nav.name}
                  </Button>
                ))}
              </div>
              <div className="overflow-y-scroll h-[100%]">
                <FollowersFollowings />
              </div>
            </div>
          </div>
          <div className="w-[10%] h-[100%]">
            <LogoutOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
