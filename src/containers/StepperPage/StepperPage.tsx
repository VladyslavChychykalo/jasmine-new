export default function StepperPage() {
  return <div>Stepper Page</div>;
}

// ============ typescript interface

// export interface StepperPageProps {
//   ownerList: ArrayObj[] | undefined;
// }

// export default function StepperPage({ ownerList }: StepperPageProps) {
//   return <div>Stepper Page</div>;
// }

// export interface ArrayObj {
//   details: string;
//   job: string;
//   name: string;
// }

// interface MyNextPageContext extends NextPageContext {
//   query: {
//     name: string,
//     car: string
//   }
// }

// StepperPage.getInitialProps = async (ctx: NextPageContext) => {
// const name = ctx.query.name
// const car = ctx.query.car
//   // const response = await fetch('...');
//   // const item: ArrayObj | undefined = await response.json();

//   return {};
// };
