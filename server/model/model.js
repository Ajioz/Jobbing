// const mongoose = require("mongoose");

// const ReactSchema = mongoose.Schema(
//   {
//     employer_name: String,
//     employer_logo: String,
//     employer_website: String,
//     employer_company_type: String,
//     job_publisher: String,
//     job_id: String,
//     job_employment_type: String,
//     job_title: String,
//     job_apply_link: String,
//     job_apply_is_direct: Boolean,
//     job_apply_quality_score: Number,
//     apply_options: [
//       {
//         publisher: String,
//         apply_link: String,
//         is_direct: Boolean,
//       },
//     ],
//     job_description: String,
//     job_is_remote: Boolean,
//     job_posted_at_timestamp: Number,
//     job_posted_at_datetime_utc: String,
//     job_city: String,
//     job_state: String,
//     job_country: String,
//     job_latitude: Number,
//     job_longitude: Number,
//     job_benefits: String,
//     job_google_link: String,
//     job_offer_expiration_datetime_utc: String,
//     job_offer_expiration_timestamp: String,
//     job_required_experience: Object,
//     job_required_skills: Array,
//     job_required_education: {
//       postgraduate_degree: Boolean,
//       professional_certification: Boolean,
//       high_school: Boolean,
//       associates_degree: Boolean,
//       bachelors_degree: Boolean,
//       degree_mentioned: Boolean,
//       degree_preferred: Boolean,
//       professional_certification_mentioned: Boolean,
//     },
//     job_experience_in_place_of_education: Boolean,
//     job_min_salary: String,
//     job_max_salary: String,
//     job_salary_currency: String,
//     job_salary_period: String,
//     job_highlights: {
//       Qualifications: [String],
//       Responsibilities: [String],
//     },
//     job_job_title: String,
//     job_posting_language: String,
//     job_onet_soc: String,
//     job_onet_job_zone: String,
//     job_naics_code: String,
//     job_naics_name: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("React", ReactSchema);


// // Create Product
// exports.seedData = async (req, res) => {
//    try {
//      const { employer_name, employer_website, job_description, apply_options } =    req.body;
//      const { publisher, apply_link, is_direct } = apply_options[0];
//     //  await React.create({
//     //    employer_name,
//     //    employer_website,
//     //    job_description,
//     //    apply_options: [
//     //      {
//     //        publisher,
//     //        apply_link,
//     //        is_direct,
//     //      },
//     //    ],
//     //  });
//      await React.create(req.body);
//      return res.status(201).json({ message: "Job added" });
//    } catch (error) {
//      console.error(error);
//      return res
//        .status(400)
//        .json({ message: "Something didn't go well with request" });
//    }
//   // const data = req.body;
//   // const seedProduct = await React.insertMany(reactPath_read);
//   // return res.status(201).send(reactPath_read);
//   // return res.status(201).send({ msg: "Successfully fetched" });
// }

// // {
// //   employer_name: String,
// //   employer_website: String,
// //   job_description: String,
// //   apply_options: [
// //     {
// //       publisher: String,
// //       apply_link: String,
// //       is_direct: Boolean,
// //     }]

// write Reacts Jobs into json db helper method
// const newReactJobs = (path, data) => {
//   const stringifyData = JSON.stringify(data);
//   fs.writeFileSync(path, stringifyData);
//   console.log(`Successfully written to ${path} jobs`);
// };

// const newDate = (path, data) => {
//   const stringifyData = JSON.stringify(data);
//   fs.writeFileSync(path, stringifyData);
//   console.log(`Successfully written ${stringifyData}`);
// };