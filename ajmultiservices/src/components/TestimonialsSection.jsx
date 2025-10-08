import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const TestimonialsCard = ({ name, role, quote }) => {
    return (
    <Card className="max-w-sm rounded-2xl shadow-lg border p-4 bg-white ">
      <CardHeader className="flex flex-col items-center text-center space-y-2">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <p className="text-sm text-gray-500">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 italic">“{quote}”</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 lg:text-6xl leading-tight tracking-tight text-center mt-12">What our clients have to say about us...</h2>
        <section className="grid sm:grid-cols-1 lg:grid-cols-3 lg:max-w-[80%] gap-12 p-8 justify-items-center text-white overflow-hidden">
            <TestimonialsCard 
            name="Michael Spencer"
            role="RB Total Solution LLC, Owner"
            quote="The team did an amazing job from start to finish. They were professional, punctual, and detail-oriented, making sure every wall had a smooth, clean finish. The colors look vibrant, and the quality of the paint is outstanding—it really transformed the space. Highly recommend this company for anyone looking for reliable and top-notch painting services!"
            />
            <TestimonialsCard 
            name="Michael Spencer"
            role="RB Total Solution LLC, Owner"
            quote="The team did an amazing job from start to finish. They were professional, punctual, and detail-oriented, making sure every wall had a smooth, clean finish. The colors look vibrant, and the quality of the paint is outstanding—it really transformed the space. Highly recommend this company for anyone looking for reliable and top-notch painting services!"
            />
            <TestimonialsCard 
            name="Michael Spencer"
            role="RB Total Solution LLC, Owner"
            quote="The team did an amazing job from start to finish. They were professional, punctual, and detail-oriented, making sure every wall had a smooth, clean finish. The colors look vibrant, and the quality of the paint is outstanding—it really transformed the space. Highly recommend this company for anyone looking for reliable and top-notch painting services!"
            />
            <TestimonialsCard 
            name="Michael Spencer"
            role="RB Total Solution LLC, Owner"
            quote="The team did an amazing job from start to finish. They were professional, punctual, and detail-oriented, making sure every wall had a smooth, clean finish. The colors look vibrant, and the quality of the paint is outstanding—it really transformed the space. Highly recommend this company for anyone looking for reliable and top-notch painting services!"
            />
            <TestimonialsCard 
            name="Michael Spencer"
            role="RB Total Solution LLC, Owner"
            quote="The team did an amazing job from start to finish. They were professional, punctual, and detail-oriented, making sure every wall had a smooth, clean finish. The colors look vibrant, and the quality of the paint is outstanding—it really transformed the space. Highly recommend this company for anyone looking for reliable and top-notch painting services!"
            />
            <TestimonialsCard 
            name="Michael Spencer"
            role="RB Total Solution LLC, Owner"
            quote="The team did an amazing job from start to finish. They were professional, punctual, and detail-oriented, making sure every wall had a smooth, clean finish. The colors look vibrant, and the quality of the paint is outstanding—it really transformed the space. Highly recommend this company for anyone looking for reliable and top-notch painting services!"
            />
        </section>
    </div>
  );
};

export default Testimonials;