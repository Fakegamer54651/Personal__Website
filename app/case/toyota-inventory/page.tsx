import { Metadata } from 'next'
import CaseNav from '../../../components/CaseNav'
import '../../../styles/case-nav.css'
import './toyota-inventory.css'

export const metadata: Metadata = {
  title: 'Inventory Management System for Toyota Dealerships in Uzbekistan | Case Study',
  description: 'A comprehensive case study on designing an internal inventory management system that reduced service overload by 17% and improved parts handling workflows for Toyota\'s official dealership network in Uzbekistan.',
  keywords: 'inventory management system, automotive service operations, dealership inventory workflow, internal enterprise tools, technician workflow optimization, Toyota Uzbekistan',
}

export default function ToyotaInventoryPage() {
  return (
    <div className="case-study-page">
      <CaseNav />
      
      <article className="case-study-content">
        <header className="case-study-header">
          <h1 className="case-study-title">
            Inventory Management System for Toyota Dealerships in Uzbekistan
          </h1>
          <p className="case-study-intro">
            This case study examines the design and implementation of an internal inventory management system 
            for Toyota's official dealership network in Uzbekistan. The project focused on optimizing service 
            operations, improving parts handling workflows, and addressing inefficiencies in how technicians 
            and warehouse staff interacted with inventory systems.
          </p>
        </header>

        <section className="case-study-section">
          <h2 className="section-heading">Company</h2>
          <p className="section-text">
            Toyota's official dealership network in Uzbekistan operates multiple service centers responsible 
            for new and used vehicle sales, aftersales service, and parts management. The dealerships function 
            under Toyota's global operational standards, adapted to accommodate local infrastructure, team 
            workflows, and supply chain conditions.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="section-heading">Context</h2>
          <p className="section-text">
            The mechanical service departments relied on outdated and disjointed inventory tools that were not 
            designed for the specific demands of automotive service operations. These legacy systems created 
            inefficiencies across technician workflows, led to supply shortages, and provided poor visibility 
            into how parts were requested, stored, and used. The lack of integration between warehouse operations 
            and service bay requirements resulted in frequent delays and miscommunication.
          </p>
        </section>

        <section className="case-study-section">
          <h2 className="section-heading">Problem</h2>
          <p className="section-text">
            The primary issues identified through on-site observation and workflow analysis included:
          </p>
          <ul className="problem-list">
            <li>Service overload caused by inefficient parts request and fulfillment processes</li>
            <li>Supply delays due to poor inventory visibility and stock management</li>
            <li>Unauthorized or unclear parts handling, resulting in accountability gaps</li>
            <li>Significant misalignment between how the system was designed and how technicians and warehouse staff actually worked</li>
            <li>Manual workarounds that increased error rates and slowed operations</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2 className="section-heading">Why This Project</h2>
          <p className="section-text">
            The objective was to optimize internal service performance and minimize parts misuse through a 
            redesigned inventory management system. The previous tools were slow, outdated, and failed to 
            support the real-world workflows of technicians and warehouse personnel. The new system aimed to:
          </p>
          <ul className="solution-list">
            <li>Reduce product overload by streamlining parts requests and approvals</li>
            <li>Improve the warehouse-to-technician flow with better handoff processes</li>
            <li>Increase control over parts handling through enhanced access controls and traceability</li>
            <li>Align system design with observed operational behavior</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2 className="section-heading">Approach & Interactions</h2>
          <p className="section-text">
            The design process began with on-site observation of day-to-day dealership operations. This research 
            phase involved shadowing technicians and warehouse staff to understand how they interacted with 
            existing inventory systems and where friction points occurred.
          </p>
          <p className="section-text">
            Beyond layout and visual design, significant effort was dedicated to refining micro-interactions 
            that directly impacted usability and task efficiency. This included:
          </p>
          <ul className="approach-list">
            <li>Context-aware status indicators that surfaced relevant information at decision points</li>
            <li>Simplified parts request flows that reduced steps and removed unnecessary approvals</li>
            <li>Real-time inventory visibility integrated into technician workstations</li>
            <li>Role-based access controls that matched organizational structure and responsibility levels</li>
            <li>Streamlined handoff protocols between warehouse and service bays</li>
          </ul>
        </section>

        <section className="case-study-section">
          <h2 className="section-heading">Results</h2>
          <p className="section-text">
            The redesigned inventory management system improved service operations across Toyota's dealership 
            network in Uzbekistan. By addressing core interaction issues and aligning system behavior with real 
            technician and warehouse workflows, measurable improvements were achieved:
          </p>
          <ul className="results-list">
            <li>Service overload decreased by 17%, based on internal analytics tracking parts request volume and fulfillment time</li>
            <li>Parts misuse dropped significantly due to improved access control and traceability mechanisms</li>
            <li>Workflow friction was reduced through context-aware micro-interactions that eliminated unnecessary steps</li>
            <li>The system became faster and more intuitive, better aligned with how staff actually performed their work</li>
            <li>Enhanced visibility into parts usage patterns enabled more accurate inventory forecasting</li>
          </ul>
        </section>

        <section className="case-study-section">
          <p className="section-text">
            This project demonstrated the value of system-level thinking in designing internal enterprise tools. 
            When operational tools are aligned with real workflows and decision-making patterns, they function 
            as performance multipliers rather than obstacles. The design decisions throughout this project were 
            driven by observed operational reality rather than assumptions about how work should be done.
          </p>
        </section>
      </article>
    </div>
  )
}


