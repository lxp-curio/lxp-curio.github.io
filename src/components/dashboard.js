import React from 'react';

class Dashboard extends React.Component {


    render() {
        return (
            <section className="lxp-dashboard jumbotron container">
                <h3 class="display-7">Starting hours for a standard LXP Project: 120.00</h3>
                <div class="row">
                    <label class="col-sm-9">Ratio of stardard base hours to actual (aim for 1)</label><input class="form-control col-sm-3" type="text" />
                </div>
            </section>
        );
    }
}

export default Dashboard;