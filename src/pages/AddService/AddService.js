import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'

const AddService = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = (data) => {
        fetch("https://stormy-wave-57583.herokuapp.com/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);

        reset()
    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-danger">Please Add Services</h1>
                <div className=" w-25 m-auto mt-5">
                    <div className="AdService-container ">
                        <div className="addService">
                            <form onSubmit={handleSubmit(onSubmit)} style={{ border: '1px solid gray', height: 300, m: 3 }}>
                                <input
                                    style={{ width: '50%', border: '2px solid green', }}
                                    {...register("name")}
                                    placeholder="Name"
                                // className="p-2 m-2 w-100 input-field"
                                />
                                <br />

                                <input
                                    style={{ width: '50%', border: '2px solid green' }}
                                    {...register("description")}
                                    placeholder="Description"
                                // className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ width: '50%', border: '2px solid green', m: 1 }}
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    className="p-2 m-2 w-100 input-field"
                                />
                                <br />
                                <input
                                    style={{ width: '50%', border: '2px solid green', m: 2 }}
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    type="number"
                                // className="p-2 m-2 w-100 input-field"
                                />
                                <br />




                                <input
                                    style={{ width: '30%' }}
                                    type="submit"
                                    value="Add"
                                // className="btn btn-info w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;